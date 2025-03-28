import {Axios } from "axios";
import { IGpsLocationType } from "@/domain/IGpsLocationType";

export abstract class GpsLocationTypeService {
    private static axios = new Axios(
        {
            baseURL: "https://sportmap.akaver.com/api/v1.0/GpsSessions/",
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )

    static async getAll(): Promise<IGpsLocationType[]> {
        const url = "";
        try {
            const response = await this.axios.get<IGpsLocationType[]>(url);

            console.log('getAll response', response);
            if (response.status === 200) {
                return response.data;
            }
            return [];
        } catch (error) {
            console.log('error: ', (error as Error).message);
            return [];
        }
    }
}