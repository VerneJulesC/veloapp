/**
 * Doctor entity, used for filtering as well.
 */
export class Doctor {
    /**
     * @type {number} id Unique numeric identifier.
     */
    doctor_id: number = 0;
    
    /**
     * @type {number} id Unique numeric identifier.
     */
    provider_id?: string;
    
    /**
     * @type {string} id Unique numeric identifier.
     */
    doctor_fname?: string;
    
    /**
     * @type {string} id Unique numeric identifier.
     */
    doctor_mname?: string;
    
    /**
     * @type {string} id Unique numeric identifier.
     */
    doctor_lname?: string;
    
    /**
     * @type {string} id Unique numeric identifier.
     */
    doctor_address?: string;
    
    /**
     * @type {string} id Unique numeric identifier.
     */
    doctor_city?: string;
    
    /**
     * @type {string} id Unique numeric identifier.
     */
    doctor_state?: string;
    
    /**
     * @type {string} id Unique numeric identifier.
     */
    doctor_zip?: string;
    
    /**
     * @type {string} id Unique numeric identifier.
     */
    doctor_ein?: string;
    
    /**
     * @type {string} id Unique numeric identifier.
     */
    doctor_upin?: string;
    
    /**
     * @type {string} id Unique numeric identifier.
     */
    doctor_ssn?: string;
    
    /**
     * @type {string} id Unique numeric identifier.
     */
    doctor_npi?: string;
    
    /**
     * @type {string} id Unique numeric identifier.
     */
    doctor_license?: string;
    
    /**
     * @type {string} id Unique numeric identifier.
     */
    doctor_fax?: string;
    
    /**
     * @type {string} id Unique numeric identifier.
     */
    doctor_email?: string;
    
    /**
     * @type {string} id Unique numeric identifier.
     */
    doctor_phone?: string;

    rowclass: string = '';
    
    filtered: boolean = false;
}