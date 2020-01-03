class DiskElement {
  private type: string;
  private name: string;
  private modificationDate: Date;
  private size: number;
  private attributes: Attributes;


  constructor($type: string, $name: string, $modificationDate: Date, $size: number, $attributes: Attributes) {
    this.type = $type;
    this.name = $name;
    this.modificationDate = $modificationDate;
    this.size = $size;
    this.attributes = $attributes;
  }


    /**
     * Getter $type
     * @return {string}
     */
  public get $type(): string {
    return this.type;
  }

    /**
     * Getter $name
     * @return {string}
     */
  public get $name(): string {
    return this.name;
  }

    /**
     * Getter $modificationDate
     * @return {Date}
     */
  public get $modificationDate(): Date {
    return this.modificationDate;
  }

    /**
     * Getter $size
     * @return {number}
     */
  public get $size(): number {
    return this.size;
  }

    /**
     * Getter $attributes
     * @return {Attributes}
     */
  public get $attributes(): Attributes {
    return this.attributes;
  }

    /**
     * Setter $type
     * @param {string} value
     */
  public set $type(value: string) {
    this.type = value;
  }

    /**
     * Setter $name
     * @param {string} value
     */
  public set $name(value: string) {
    this.name = value;
  }

    /**
     * Setter $modificationDate
     * @param {Date} value
     */
  public set $modificationDate(value: Date) {
    this.modificationDate = value;
  }

    /**
     * Setter $size
     * @param {number} value
     */
  public set $size(value: number) {
    this.size = value;
  }

    /**
     * Setter $attributes
     * @param {Attributes} value
     */
  public set $attributes(value: Attributes) {
    this.attributes = value;
  }


}
