import PRODUCT1 from "../assets/images/product1.png";

import PRODUCT2 from "../assets/images/product2.png";
import PRODUCT3 from "../assets/images/product3.png";
import PRODUCT4 from "../assets/images/product4.png";
import PRODUCT5 from "../assets/images/product5.png";
import PRODUCT6 from "../assets/images/product6.png";

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

import REVIEW1 from "../assets/images/comment1.png";
import REVIEW2 from "../assets/images/comment2.png";
import REVIEW3 from "../assets/images/comment3.png";
// import REVIEW4 from "../assets/images/comment4.png";

export const products: Array<{ id: number, img: string, name: string, description: string }> = [
    {
        id: 1,
        img: PRODUCT1,
        name: "Все как на ладони",
        description: "В нашей CRM системе, вы можете внести все данные вашего дома, по блокам и подъездам. Контролировать весь процесс работы ваших менеджеров!"
    },
    {
        id: 2,
        img: PRODUCT2,
        name: "Улучшите эффективность работы",
        description: "Воронка родаж поможет исключить потери для компании!"
    },
    {
        id: 3,
        img: PRODUCT3,
        name: "Аналитика аналитика и еще раз аналитика",
        description: "Детальная видимость процессов и этапов работы. Узнайте сколько свободных, забронированных или проданных объектов недвижимости!"
    },
    {
        id: 4,
        img: PRODUCT4,
        name: "Блоки и подъезды в удобном порядке",
        description: "В IKCRM, вы можете внести все данные вашего дома, по блокам и подъездам. И видеть этапы продаж объектов!"
    },
    {
        id: 5,
        img: PRODUCT5,
        name: "Делопроизводство",
        description: "В нашей CRM так же учтены инструменты, как: Документооборот возможность при одном клике сформировать договор с клиентами; Календарь, который даст менеджерам возможность выставлять даты для обзвона потенциальных клиентов"
    },
    {
        id: 6,
        img: PRODUCT6,
        name: "Вся информация в один клик!",
        description: "Каждое действие с клиентом, будет сохраняться в отдельном окне клиента. Больше никакой потери информации!"
    }
]

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

export const reviews: Array<{ id: number, img: string, desciption: string, author: string, job: string }> = [
    {
        id: 1,
        img: REVIEW1,
        desciption: "Благодаря внедрению IK СRM мы начали в 2 раза быстрее обрабатывать заявки, перестали забывать о задачах и больше не тратим уйму времени, восстанавливая историю взаимодействия с клиентами. Любые данные можно найти в пару кликов и дать клиенту оперативный ответ. Спасибо ребятам!",
        author: "Александр Ли",
        job: "Marketing director"
    },
    {
        id: 2,
        img: REVIEW3,
        desciption: "IK CRM стало лучшим нашим приобретением, контроль бизнеса в целом и каждого сотрудника онлайн, экономия средств на покупке и обслуживании дополнительного оборудования, оптимизация бизнес-процессов компании и увеличение продаж.",
        author: "Натали Турсунбаева",
        job: "CEO"
    },
    {
        id: 3,
        img: REVIEW2,
        desciption: "Оперативная обратная связь с заказчиком — это 50% успеха и один из основных факторов при высокой конкуренции. IK CRM ускорила внутренние процессы компании, помогла выстроить этапную работу со сделками и удерживать больше клиентов.",
        author: "Нодир Таджибаев",
        job: "CEO"
    },
]