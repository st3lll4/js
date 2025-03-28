import axios from "axios";
import type { IGpsLocationType } from "@/domain/IGpsLocationType";
import type { IResultObject } from "@/types/IResultObject";

export abstract class GpsLocationTypeService {

    private static axios = axios.create(
        {
            baseURL: "https://sportmap.akaver.com/api/v1.0/GpsSessions/",
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )

    static async getAllAsync(): Promise<IResultObject<IGpsLocationType[]>> {
        const url = "";
        try {
            const response = await this.axios.get<IGpsLocationType[]>(url);

            if (response.status <= 300) {
                return {
                    data: response.data
                };
            }
            return {
                errors: [response.status.toString() + "" + response.statusText]
            };
        } catch (error) {
            console.log('error: ', (error as Error).message);
            return {
                errors: [JSON.stringify(error)]
            };
        }
    }
}