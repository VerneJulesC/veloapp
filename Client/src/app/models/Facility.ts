export class Facility {
    
    /**
     * @type {number} id Unique numeric identifier.
     */
    facility_id: number = 0;

    /**
     * @type {string} type of schedule
     */
    facility_name?: string;
    
    /**
     * @type {number} id Unique numeric identifier.
     */
    facility_doctor_id?: number;
    
    /**
     * @type {string} type of schedule
     */
    facility_doctor?: string;
    
    /**
     * @type {string} type of schedule
     */
    facility_address?: string;

    /**
     * @type {string} type of schedule
     */
    facility_coordinates?: string;

    /**
     * @type {string} type of schedule
     */
    facility_city?: string;

    /**
     * @type {string} type of schedule
     */
    facility_state?: string;

    /**
     * @type {string} type of schedule
     */
    facility_zip?: string;

    /**
     * @type {string} type of schedule
     */
    facility_ein?: string;

    /**
     * @type {string} type of schedule
     */
    facility_ssn?: string;

    /**
     * @type {string} type of schedule
     */
    facility_npi?: string;

    /**
     * @type {string} type of schedule
     */
    facility_fax?: string;

    /**
     * @type {string} type of schedule
     */
    facility_email?: string;

    /**
     * @type {string} type of schedule
     */
    facility_phone?: string;

    rowclass: string = '';
    
    filtered: boolean = false;

} 