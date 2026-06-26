class NamedValue<t> {
    private _value: t | undefined

    constructor(public readonly name: string) { }

    setValue(value: t) {
        this._value = value
    }

    get value(): t {
        return this._value as t
    }

    public toString(): string | undefined {
        return this._value?.toString()
    }
}

let value = new NamedValue<number>('myNumber');
value.setValue(10);
console.log(value.toString());