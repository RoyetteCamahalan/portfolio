import BaseAPIService from "./BaseAPIService";


class ClientService extends BaseAPIService{
    async sendMail(params: object): Promise<any> {
        return await this.request(`/client/sendmail`, 'POST', params)
    }
}

export const clientService = new ClientService()