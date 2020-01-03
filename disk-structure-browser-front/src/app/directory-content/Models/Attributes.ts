class Attributes {
  private compressed: boolean;
  private encrypted: boolean;
  private hidden: boolean;
  private readOnly: boolean;
  private system: boolean;

  constructor($compressed: boolean, $encrypted: boolean, $hidden: boolean, $readOnly: boolean, $system: boolean) {
    this.compressed = $compressed;
    this.encrypted = $encrypted;
    this.hidden = $hidden;
    this.readOnly = $readOnly;
    this.system = $system;
  }


    /**
     * Getter $compressed
     * @return {boolean}
     */
  public get $compressed(): boolean {
    return this.compressed;
  }

    /**
     * Setter $compressed
     * @param {boolean} value
     */
  public set $compressed(value: boolean) {
    this.compressed = value;
  }


    /**
     * Getter $encrypted
     * @return {boolean}
     */
  public get $encrypted(): boolean {
    return this.encrypted;
  }

    /**
     * Setter $encrypted
     * @param {boolean} value
     */
  public set $encrypted(value: boolean) {
    this.encrypted = value;
  }

    /**
     * Getter $hidden
     * @return {boolean}
     */
  public get $hidden(): boolean {
    return this.hidden;
  }

    /**
     * Setter $hidden
     * @param {boolean} value
     */
  public set $hidden(value: boolean) {
    this.hidden = value;
  }

    /**
     * Getter $readOnly
     * @return {boolean}
     */
  public get $readOnly(): boolean {
    return this.readOnly;
  }

    /**
     * Setter $readOnly
     * @param {boolean} value
     */
  public set $readOnly(value: boolean) {
    this.readOnly = value;
  }

    /**
     * Getter $system
     * @return {boolean}
     */
  public get $system(): boolean {
    return this.system;
  }

    /**
     * Setter $system
     * @param {boolean} value
     */
  public set $system(value: boolean) {
    this.system = value;
  }

}
