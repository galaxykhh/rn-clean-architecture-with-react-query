export default class Copyable<T> {
    public copyWith(properties: Partial<T>): this {
        const copied = Object.assign(Object.create(Object.getPrototypeOf(this)), this);

        for (const property in properties) {
            if (copied.hasOwnProperty(property)) {
                copied[property] = properties[property];
            }
        }

        return copied;
    }
}