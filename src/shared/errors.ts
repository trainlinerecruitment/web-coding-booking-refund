export class NoRefundableError extends Error {
    constructor() {
        super('No refundable');
    }
}
