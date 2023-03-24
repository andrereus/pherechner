class FoodItem {
    constructor(name, phe) {
        this.name = name;
        this.phe = phe;
    }
}

class Data {
    static KEY_PLAN = "plan";
    static KEY_LISTE = "liste";
    static KEY_TOLERANCE = "toleranz";
    static KEY_DAYS = "tage";
    static KEY_TOTAL_PHE = "gesamtliste";
    static KEY_AVERAGE_PHE = "durchschnitt";
    
    static getPlan() {
        const plan = JSON.parse(localStorage.getItem(Data.KEY_PLAN));
        return plan ? plan.map(item => new FoodItem(item.name, item.phe)) : [];
    }
    
    static savePlan(plan) {
        localStorage.setItem(Data.KEY_PLAN, JSON.stringify(plan));
    }
    
    static getList() {
        const list = JSON.parse(localStorage.getItem(Data.KEY_LISTE));
        return list ? list.map(item => new FoodItem(item.name, item.phe)) : [];
    }
    
    static saveList(list) {
        localStorage.setItem(Data.KEY_LISTE, JSON.stringify(list));
    }
    
    static get(key) {
        return localStorage.getItem(key);
    }
    
    static set(key, value) {
        localStorage.setItem(key, value);
    }
    
    static remove(key) {
        localStorage.removeItem(key);
    }
}

class PheCalculator {
    static calculatePhe(weight, phePer100g) {
        return weight * phePer100g / 100;
    }

    static calculatePheFromProtein(weight, proteinPer100g, category) {
        const phePer100g = PheCalculator.proteinToPhe(proteinPer100g, category);
        return PheCalculator.calculatePhe(weight, phePer100g);
    }

    static proteinToPhe(protein, category) {
        const conversionFactors = {
            "fruit": 50,
            "vegetable": 75,
            "other": 25
        };
        return protein * conversionFactors[category] / 100;
    }
}

class UI {
    static displayPlan() {
        const plan = Data.getPlan();
        const planElement = document.getElementById("plan");

        planElement.innerHTML = plan.map(item => `${item.name}: ${item.phe.toFixed(2)} Phe`).join('<br>');
    }

    static displayList() {
        const list = Data.getList();
        const listElement = document.getElementById("liste");

        listElement.innerHTML = list.map(item => `${item.name}: ${item.phe.toFixed(2)} Phe`).join('<br>');
    }

    static displayData() {
        UI.displayPlan();
        UI.displayList();
        document.getElementById("toleranz").innerHTML = Data.get(Data.KEY_TOLERANCE);
        document.getElementById("tage").innerHTML = Data.get(Data.KEY_DAYS);
        document.getElementById("gesamt").innerHTML = Data.get(Data.KEY_TOTAL_PHE);
        document.getElementById("durchschnitt").innerHTML = Data.get(Data.KEY_AVERAGE_PHE);
    }
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("addBtn").addEventListener("click", () => {
        const weight = parseFloat(document.getElementById("weight").value);
        const phePer100g = parseFloat(document.getElementById("phePer100g").value);
        const proteinPer100g = parseFloat(document.getElementById("proteinPer100g").value);
        const category = document.getElementById("category").value;

        let phe;
        if (document.getElementById("pheOption").checked) {
            phe = PheCalculator.calculatePhe(weight, phePer100g);
        } else {
            phe = PheCalculator.calculatePheFromProtein(weight, proteinPer100g, category);
        }

        const foodItem = new FoodItem("Food Item", phe);
        const plan = Data.getPlan();
        plan.push(foodItem);
        Data.savePlan(plan);
        UI.displayPlan();
    });

    document.getElementById("resetPlanBtn").addEventListener("click", () => {
        Data.remove(Data.KEY_PLAN);
        UI.displayData();
    });

    document.getElementById("resetListeBtn").addEventListener("click", () => {
        Data.remove(Data.KEY_LISTE);
        UI.displayData();
    });

    document.getElementById("finishDayBtn").addEventListener("click", () => {
        const plan = Data.getPlan();
        const totalPhe = plan.reduce((total, item) => total + item.phe, 0);

        const date = new Date();
        const dateString = `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth() + 1).toString().padStart(2, "0")}.${date.getFullYear()}`;
        const dayEntry = new FoodItem(dateString, totalPhe);

        const list = Data.getList();
        list.push(dayEntry);
        Data.saveList(list);

        Data.remove(Data.KEY_PLAN);
        UI.displayData();
    });

    // Initialize
    UI.displayData();
});