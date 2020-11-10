export interface CountrySearch {
    country: String,
    provinces: [{
        province: String,
        confirmed: number,
        recovered: number,
        deaths: number,
        active: number,
    },],
    latitude: number,
    longitude: number,
    date: Date
}
