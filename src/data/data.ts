import BENEFIT1 from "../assets/icons/benefit1.png";
import BENEFIT2 from "../assets/icons/benefit2.png";
import BENEFIT3 from "../assets/icons/benefit3.png";
import BENEFIT4 from "../assets/icons/benefit4.png";
import BENEFIT5 from "../assets/icons/benefit5.png";
import BENEFIT6 from "../assets/icons/benefit6.png";

import CLIENT1 from "../assets/images/partner1.png"
import CLIENT2 from "../assets/images/partner2.png"
import CLIENT3 from "../assets/images/partner3.png"
import CLIENT4 from "../assets/images/partner4.png"
import CLIENT5 from "../assets/images/partner5.png"
import CLIENT6 from "../assets/images/partner6.png"

export const benefits: Array<{ id: number, img: string, name: string, description: string }> = [
    {
        id: 1,
        img: BENEFIT1,
        name: "Фиксированная цена, доплачивать не придётся!",
        description: "В ходе разработки проекта, стоимость не растёт. Только если вы не решили внести что-то, чего не было в договоре."
    },
    {
        id: 2,
        img: BENEFIT2,
        name: "Чтим Вашу конфиденциальность",
        description: "Строгая конфиденциальность по всем вопросам, связанным с проектом и вашей деятельностью"
    },
    {
        id: 3,
        img: BENEFIT3,
        name: "Cтрого по графику",
        description: "Оговариваем и прописываем сроки, если работа не выполнена вовремя - вы получаете скидку на продукт"
    },
    {
        id: 4,
        img: BENEFIT4,
        name: "Просто и удобно",
        description: "Разработали с учетом всех предпочтений и c удобством пользования"
    },
    {
        id: 5,
        img: BENEFIT5,
        name: "Личный менеджер 24/7",
        description: "За проектом следят аналитики которые 24/7 отвечают в чате с заказчиком"
    },
    {
        id: 6,
        img: BENEFIT6,
        name: "Online отчетность",
        description: "По вашему требованию можно создать отчеты в полной мере отражающий результативность рабочего дня"
    },
]

export const clients: Array<{ id: number, img: string, name: string }> = [
    {
        id: 1,
        img: CLIENT1,
        name: "Gorod"
    },
    {
        id: 2,
        img: CLIENT2,
        name: "New House"
    },
    {
        id: 3,
        img: CLIENT3,
        name: "КНТ"
    },
    {
        id: 4,
        img: CLIENT4,
        name: "Tiara"
    },
    {
        id: 5,
        img: CLIENT5,
        name: "Mirador"
    },
    {
        id: 6,
        img: CLIENT6,
        name: "Hottour"
    },
]
