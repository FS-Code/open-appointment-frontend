export const ServicesPlaceholder = [
    {
        id: 1,
        name: "Hourly Service w/ 5 min post-buffer",
        location: "New York",
        details: "Get a training from Elon Musk",
        duration: 3600,
        business_hours: {
            "monday": {
                starts: "09:00",
                ends: "18:00",
            },
            "tuesday": {
                starts: "09:00",
                ends: "18:00",
            },
            "wednesday": {
                starts: "09:00",
                ends: "18:00",
            },
            "friday": {
                starts: "09:00",
                ends: "18:00",
            },
            "saturday": null,
            "sunday": null,
        },
        buffer: {
            "before": 0,
            "after": 300
        }
    },

    {
        id: 2,
        name: "2 Hours Service w/ no buffer",
        location: "Florida",
        details: "Get a training from Jeff Bezos",
        duration: 3600 * 2,
        business_hours: {
            "monday": {
                starts: "10:00",
                ends: "19:00",
            },
            "tuesday": {
                starts: "10:00",
                ends: "19:00",
            },
            "wednesday": {
                starts: "10:00",
                ends: "19:00",
            },
            "friday": {
                starts: "10:00",
                ends: "19:00",
            },
            "saturday": null,
            "sunday": null,
        },
        buffer: {
            "before": 0,
            "after": 0
        }
    },

    {
        id: 3,
        name: "Full-day Service w/ no buffer",
        location: "Washington",
        details: "Get a training from Bill Gates",
        duration: 3600 * 24,
        business_hours: {
            "monday": {
                starts: "00:00",
                ends: "23:59",
            },
            "tuesday": {
                starts: "00:00",
                ends: "23:59",
            },
            "wednesday": {
                starts: "00:00",
                ends: "23:59",
            },
            "friday": {
                starts: "00:00",
                ends: "23:59",
            },
            "saturday": null,
            "sunday": null,
        },
        buffer: {
            "before": 0,
            "after": 0
        }
    },

    {
        id: 4,
        name: "6 Hours Service w/ an hour both-buffer",
        location: "Delaware",
        details: "Get a training from Sam Altman",
        duration: 3600 * 6,
        business_hours: {
            "monday": {
                starts: "12:00",
                ends: "19:00",
            },
            "tuesday": {
                starts: "12:00",
                ends: "19:00",
            },
            "wednesday": {
                starts: "12:00",
                ends: "19:00",
            },
            "friday": {
                starts: "12:00",
                ends: "19:00",
            },
            "saturday": {
                starts: "12:00",
                ends: "19:00",
            },
            "sunday": {
                starts: "12:00",
                ends: "19:00",
            },
        },
        buffer: {
            "before": 1800,
            "after": 1800
        }
    }
]