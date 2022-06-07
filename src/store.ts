export type listType = {
        id: number
        fullName: string,
        bd: string,
        sex: string,
        jobTitle: string,
        unit: string | null,
        fullNameLeader: string | null

}
export const initializeState: Array<listType> =
    [{id: 1, fullName: "Иванов Иван Иванович", bd: "01.01.1990", sex: "м.", jobTitle: "Директор", unit: null, fullNameLeader: null },
        {id: 2, fullName: "Петров Иван Петрович", bd: "10.03.1989", sex: "м.", jobTitle: "Руководитель подразделения", unit: "Отдел продаж", fullNameLeader: null },
        {id: 3, fullName: "Светлова Алена Сергеева", bd: "10.03.1998", sex: "ж.", jobTitle: "Руководитель подразделения", unit: "Отдел закупки", fullNameLeader: null },
        {id: 4, fullName: "Иванова Мария Николавна", bd: "11.08.1985", sex: "ж.", jobTitle: "Контролер", unit: "Отдел продаж", fullNameLeader: "Петров Иван Петрович" },
        {id: 5, fullName: "Сидорова Ульяна Павловна", bd: "29.07.1980", sex: "ж.", jobTitle: "Контролер", unit: "Отдел продаж", fullNameLeader: "Петров Иван Петрович" },
        {id: 6, fullName: "Никифоров Николай Викторович", bd: "21.07.1983", sex: "м.", jobTitle: "Рабочий", unit: "Отдел продаж", fullNameLeader: "Петров Иван Петрович" },
        {id: 7, fullName: "Гаврилов Петр Владимирович", bd: "11.02.1980", sex: "м.", jobTitle: "Рабочий", unit: "Отдел продаж", fullNameLeader: "Петров Иван Петрович" },
        {id: 8, fullName: "Сергеев Андрей Иванович", bd: "20.04.1978", sex: "м.", jobTitle: "Рабочий", unit: "Отдел продаж", fullNameLeader: "Петров Иван Петрович" },
        {id: 9, fullName: "Романов Павел Викторович", bd: "19.09.1982", sex: "м.", jobTitle: "Рабочий", unit: "Отдел продаж", fullNameLeader: "Петров Иван Петрович" },
        {id: 10, fullName: "Агафьева Наталья Федоровна", bd: "10.10.1972", sex: "ж.", jobTitle: "Контролер", unit: "Отдел закупки", fullNameLeader: "Светлова Алена Сергеевна" },
        {id: 11, fullName: "Кимова Светлана Николаевна", bd: "19.11.1985", sex: "ж.", jobTitle: "Контролер", unit: "Отдел закупки", fullNameLeader: "Светлова Алена Сергеевна" },
        {id: 12, fullName: "Павлов Сергей Георьгиевич", bd: "09.09.1977", sex: "м.", jobTitle: "Рабочий", unit: "Отдел закупки", fullNameLeader: "Светлова Алена Сергеевна" },
        {id: 13, fullName: "Сидоров Иван Павлович", bd: "14.07.1982", sex: "м.", jobTitle: "Рабочий", unit: "Отдел закупки", fullNameLeader: "Светлова Алена Сергеевна" },]


export function getRandomFloat(min, max) {
        return Math.random() * (max - min) + min;
}