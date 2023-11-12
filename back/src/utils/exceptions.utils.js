export class UserNotFound extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    };
};

export class ProductNotFound extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    };
};

export class CategoryNotFound extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    };
};