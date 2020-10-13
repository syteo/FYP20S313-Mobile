export interface ScheduleItem {
    id: string;
    name: string;
    date: string;
    startTime: string;
    endTime: string;
    venue: string;
    points: number;
};

export function toSchedule(doc: any): ScheduleItem {
    return {
        id: doc.id,
        name: doc.talkName || doc.tourName || doc.performanceName || doc.gameBoothName,
        date: doc.date,
        startTime: doc.startTime || null,
        endTime: doc.endTime || null,
        venue: doc.venue || null,
        points: doc.pointsAward || null
    };
};