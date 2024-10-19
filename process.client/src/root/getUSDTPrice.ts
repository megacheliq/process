import axios from 'axios';

const CBR_API_URL = 'https://www.cbr-xml-daily.ru/daily_json.js';

export const getUSDTPriceInRUB = async (): Promise<number> => {
    try {
        const { data: cbrData } = await axios.get(CBR_API_URL);
        const usdToRUB = cbrData.Valute.USD.Value * 1.0143;
        
        return usdToRUB;
    } catch (error) {
        console.error('Ошибка при получении курса:', error);
        return 0;
    }
};

getUSDTPriceInRUB();
