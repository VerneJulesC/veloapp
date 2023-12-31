﻿using System;

namespace veloapp.Models
{
    public class Schedule
    {
        public Schedule()
        {
            rowclass = "";
            filtered = false;
            dbcols = new string[] {
                "sched_id",
                "sched_date",
                "patient_id",
                "sched_type",
                "location_desc",
                "location_coord",
                "destination_desc",
                "destination_coord",
                "status",
                "last_modified"
            };
            pk = new string[] { "sched_id" };
            colsForUpdate = new string[] {
                "sched_date",
                "patient_id",
                "sched_type",
                "location_desc",
                "location_coord",
                "destination_desc",
                "destination_coord",
                "status"
            };
        }
        public string[] dbcols { get; set; }
        public string[] pk { get; set; }
        public string[] colsForUpdate { get; set; }
        public int sched_id { get; set; }
        public DateTime? sched_date { get; set; }
        public int? patient_id { get; set; }
        public string? sched_type { get; set; }
        public string? location_desc { get; set; }
        public string? location_coord { get; set; }
        public string? destination_desc { get; set; }
        public string? destination_coord { get; set; }
        public string? status { get; set; }
        public DateTime? last_modified { get; set; }
        public string? rowclass { get; set; }
        public bool filtered { get; set; }
    }
}
