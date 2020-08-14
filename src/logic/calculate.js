import operate from './operate';

function isNumber(item) {
    return /[0-9]+/.test(item);
  }

export default function calculate(obj, buttonName) {
    if (buttonName === "AC") {
        return {
          total: null,
          next: null,
          operation: null,
        };
    }

    if (isNumber(buttonName)){

        if (obj.operation){
            var nextNumber = (obj.next) ? obj.next + buttonName : buttonName;
            return {
                next: nextNumber
            };
        }
        
        var nextNumber = (!obj.next || obj.next === "0") ? buttonName : obj.next + buttonName;
        return {
            next: nextNumber,
            total: null,
        };
    }

    if (buttonName === ".") {
        if (obj.next){
            if (!obj.next.includes(".")){
                return {
                    next: obj.next + "."
                }
            }
        }else{
            return {
                next: "0."
            }
        }
    }

    if (buttonName === "+/-") {
        if (obj.next) {
          return { next: (-1 * parseFloat(obj.next)).toString() };
        }
        if (obj.total) {
          return { total: (-1 * parseFloat(obj.total)).toString() };
        }
        return {};
    }

    if (buttonName === "%") {
        if (obj.next){
            const result = (obj.operation) ? operate(obj.total, obj.next, obj.operation) : obj.next;

            return {
                total: operate(result, "100", "÷"),
                next: null,
                operation: null
            }
        }

        return {};
    }

    if (buttonName === "=") {
        if (obj.next && obj.operation) {
          return {
            total: operate(obj.total, obj.next, obj.operation),
            next: null,
            operation: null,
          };
        } else {
            // nothing to do
            return {};
        }
    }
  
    // Button must be an operation
    if (!obj.operation){
        return {
            total: obj.next,
            next: null,
            operation: buttonName
        }
    } else {
        // User pressed an operation button and there is an existing operation
        return {
            total: operate(obj.total, obj.next, obj.operation),
            next: null,
            operation: buttonName,
        };
    }
}