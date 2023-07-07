/**
 * Schedule entity, used for filtering as well.
 */
export class Schedule {
    /**
     * @type {number} id Unique numeric identifier.
     */
    sched_id: number = 0;

    /**
     * @type {Date} date and time of schedule
     */
    sched_date?: Date;

    /**
     * @type {number} id Unique numeric identifier.
     */
    patient_id?: number;

    /**
     * @type {string} type of schedule
     */
    sched_type?: string;

    /**
     * @type {string} Address of location
     */
    location_desc?: string;

    /**
     * @type {string} Coordinates of location
     */
    location_coord?: string;

    /**
     * @type {string} Address of destination
     */
    destination_desc?: string;

    /**
     * @type {string} Coordinates of destination
     */
    destination_coord?: string;

    /**
     * @type {string} Status of schedule
     */
    status?: string;
    
    /**
     * @type {Date} Last Modified
     */
    last_modified?: Date;

    rowclass: string = '';
    
    filtered: boolean = false;
}