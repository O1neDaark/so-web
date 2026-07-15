from pathlib import Path
from shutil import copyfile

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    Image,
    KeepTogether,
    ListFlowable,
    ListItem,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
PHOTO = ROOT / "src" / "assets" / "sergey-resume.jpg"
OUTPUT = ROOT / "output" / "pdf"
PUBLIC = ROOT / "public" / "resume"

BLUE = colors.HexColor("#126BFF")
CORAL = colors.HexColor("#FF644D")
INK = colors.HexColor("#111318")
MUTED = colors.HexColor("#5D6470")
LINE = colors.HexColor("#E4E7EC")
PAPER = colors.HexColor("#F7F8FA")


DATA = {
    "ru": {
        "filename": "Sergey-Ostaev-Resume-RU.pdf",
        "eyebrow": "РЕЗЮМЕ / AI PRODUCT DESIGNER",
        "name": "Сергей Остаев",
        "role": "Руководитель направления автоматизации / AI Product Designer",
        "summary": "7+ лет в продуктовой логике, B2B-интерфейсах и автоматизации. Проектирую AI-driven и enterprise-продукты полного цикла: от исследования сценариев и CJM до high-fidelity прототипов, handoff и внедрения в реальные процессы.",
        "location": "Готов работать из любой точки мира / удаленно / гибрид / релокация",
        "sections": ["ОПЫТ", "КЛЮЧЕВЫЕ ДОСТИЖЕНИЯ", "ОБРАЗОВАНИЕ", "НАВЫКИ"],
        "metrics": [("7+ лет", "опыта"), ("9", "запущенных продуктов"), ("1.5x", "ниже нагрузка"), ("2x", "быстрее поиск")],
        "experience": [
            ("Май 2023 - сейчас", "Ростелеком Информационные Технологии", "Руководитель направления автоматизации / AI Product Designer", [
                "Проектирую архитектуру и интерфейсы AI-продуктов и систем автоматизации: CJM, User Flow, прототипы в Figma.",
                "Создаю сложные B2B-интерфейсы: аналитические дашборды, админ-панели, управление пользователями и статистикой.",
                "Координирую команду из 5 специалистов: синхронизации, дизайн-ревью, контроль передачи решений в разработку.",
                "Работаю с backend, frontend, аналитиками и ML-инженерами, чтобы продуктовая логика не терялась на реализации.",
            ]),
            ("Январь 2022 - июнь 2023", "X5 Tech", "Менеджер по запуску проекта", [
                "Работал с внутренними IT-системами, бизнес-пользователями и запросами смежных подразделений.",
                "Выявлял проблемы в интерфейсах и процессах сервисов, подсвечивал узкие места для технических команд.",
                "Участвовал в обучении junior-специалистов и описании пользовательских сценариев внутренних сервисов.",
            ]),
            ("Апрель 2019 - январь 2022", "Честный знак", "Специалист по продуктовой логике", [
                "Анализировал инциденты продукта: баги, ошибки API, сценарии второй и третьей линии поддержки.",
                "Участвовал в актуализации технической документации и базы знаний продукта маркировки товаров.",
                "Выявлял системные ошибки и улучшал внутренние CRM-процессы на основе обращений пользователей.",
            ]),
        ],
        "achievements": [
            "Спроектировал и внедрил 9 продуктов и сервисов автоматизации.",
            "Один из продуктов получил статус лучшего продуктового решения внутри компании в 2025 году.",
            "Отобран Ростелекомом для участия в IT Camp 2025 Университета Сириус, где проектировал решение для Газпром нефти.",
            "Одним из первых освоил и внедрил рабочую среду Jaga в рамках импортозамещения.",
        ],
        "education": [
            "2025 / Научно-технический университет Сириус - передовые IT-технологии и практические методы решения бизнес-задач.",
            "2021 / Поволжский государственный университет телекоммуникаций и информатики - высшее образование, информационно-вычислительная техника.",
            "2017 / Самарский авиационный техникум при Самарском университете - техник по компьютерным сетям и автоматизированным системам.",
        ],
    },
    "en": {
        "filename": "Sergey-Ostaev-Resume-EN.pdf",
        "eyebrow": "RESUME / AI PRODUCT DESIGNER",
        "name": "Sergey Ostaev",
        "role": "Automation Lead / AI Product Designer",
        "summary": "7+ years across product logic, B2B interfaces, and automation. I design full-cycle AI-driven and enterprise products: from scenario research and CJM to high-fidelity prototypes, handoff, and adoption inside real workflows.",
        "location": "Ready to work from anywhere / remote / hybrid / relocation",
        "sections": ["EXPERIENCE", "KEY ACHIEVEMENTS", "EDUCATION", "SKILLS"],
        "metrics": [("7+ years", "experience"), ("9", "products shipped"), ("1.5x", "lower workload"), ("2x", "faster search")],
        "experience": [
            ("May 2023 - present", "Rostelecom Information Technologies", "Automation Lead / AI Product Designer", [
                "Design architecture and interfaces for AI products and automation systems: CJM, user flows, and Figma prototypes.",
                "Create complex B2B interfaces: analytics dashboards, admin panels, user management, and statistics workflows.",
                "Coordinate a 5-person team through syncs, design reviews, delivery control, and handoff to engineering.",
                "Work with backend, frontend, analysts, and ML engineers to keep product logic intact during implementation.",
            ]),
            ("January 2022 - June 2023", "X5 Tech", "Project Launch Manager", [
                "Worked with internal IT systems, business users, and requests from adjacent departments.",
                "Identified interface and service-process issues, highlighting bottlenecks for technical teams.",
                "Supported junior onboarding and documented user scenarios for internal services.",
            ]),
            ("April 2019 - January 2022", "Chestny Znak", "Product Logic Specialist", [
                "Analyzed product incidents, bugs, API errors, and second- and third-line support scenarios.",
                "Contributed to technical documentation and knowledge-base updates for the product marking system.",
                "Detected systemic product issues and improved internal CRM processes based on user requests.",
            ]),
        ],
        "achievements": [
            "Designed and launched 9 automation products and services.",
            "One product was recognized as the company's best product solution in 2025.",
            "Selected by Rostelecom for IT Camp 2025 at Sirius University, designing a solution for Gazprom Neft.",
            "Among the first to adopt and implement Jaga during the company's import-substitution transition.",
        ],
        "education": [
            "2025 / Sirius Science and Technology University - advanced IT technologies and practical methods for solving business tasks.",
            "2021 / Povolzhskiy State University of Telecommunications and Informatics - higher education, computer engineering.",
            "2017 / Samara Aviation Technical College at Samara University - computer network and automated systems technician.",
        ],
    },
}


SKILLS = [
    "Product Design", "UI/UX Design", "UX Research", "Design Systems", "Information Architecture",
    "User Flow", "CJM", "JTBD", "Usability Testing", "Prototyping", "Interaction Design",
    "Product Discovery", "Hypothesis Testing", "Stakeholder Management", "Design Review",
    "B2B Product Design", "AI Products", "AI UX Patterns", "Project Management", "Figma",
]


def register_fonts():
    regular = Path("C:/Windows/Fonts/arial.ttf")
    bold = Path("C:/Windows/Fonts/arialbd.ttf")
    pdfmetrics.registerFont(TTFont("Resume", str(regular)))
    pdfmetrics.registerFont(TTFont("ResumeBold", str(bold)))


def page_frame(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(INK)
    canvas.setFont("Resume", 8)
    canvas.drawString(16 * mm, 10 * mm, "Sergey Ostaev / AI Product Designer")
    canvas.setFillColor(MUTED)
    canvas.drawRightString(194 * mm, 10 * mm, f"{doc.page:02d}")
    canvas.setStrokeColor(LINE)
    canvas.line(16 * mm, 14 * mm, 194 * mm, 14 * mm)
    canvas.restoreState()


def styles():
    base = getSampleStyleSheet()
    return {
        "eyebrow": ParagraphStyle("eyebrow", parent=base["Normal"], fontName="ResumeBold", fontSize=7.5, leading=10, textColor=BLUE, spaceAfter=5, tracking=1.2),
        "name": ParagraphStyle("name", parent=base["Normal"], fontName="ResumeBold", fontSize=29, leading=31, textColor=INK, spaceAfter=5),
        "role": ParagraphStyle("role", parent=base["Normal"], fontName="ResumeBold", fontSize=13.5, leading=17, textColor=INK, spaceAfter=10),
        "summary": ParagraphStyle("summary", parent=base["Normal"], fontName="Resume", fontSize=9.4, leading=14, textColor=MUTED),
        "location": ParagraphStyle("location", parent=base["Normal"], fontName="ResumeBold", fontSize=8.5, leading=12, textColor=INK, spaceBefore=8),
        "section": ParagraphStyle("section", parent=base["Normal"], fontName="ResumeBold", fontSize=8.5, leading=12, textColor=BLUE, spaceBefore=9, spaceAfter=7, tracking=1.1),
        "period": ParagraphStyle("period", parent=base["Normal"], fontName="ResumeBold", fontSize=7.8, leading=11, textColor=CORAL),
        "company": ParagraphStyle("company", parent=base["Normal"], fontName="ResumeBold", fontSize=11, leading=14, textColor=INK),
        "job": ParagraphStyle("job", parent=base["Normal"], fontName="Resume", fontSize=8.8, leading=12, textColor=MUTED, spaceAfter=4),
        "body": ParagraphStyle("body", parent=base["Normal"], fontName="Resume", fontSize=8.5, leading=12.3, textColor=INK),
        "small": ParagraphStyle("small", parent=base["Normal"], fontName="Resume", fontSize=7.5, leading=10.5, textColor=MUTED),
        "metric_value": ParagraphStyle("metric_value", parent=base["Normal"], fontName="ResumeBold", fontSize=14, leading=17, textColor=INK, alignment=TA_LEFT),
        "metric_label": ParagraphStyle("metric_label", parent=base["Normal"], fontName="Resume", fontSize=7.2, leading=9, textColor=MUTED),
    }


def bullets(items, style, color=BLUE):
    return ListFlowable(
        [ListItem(Paragraph(item, style), leftIndent=10, bulletColor=color) for item in items],
        bulletType="bullet",
        start="circle",
        leftIndent=11,
        bulletFontName="ResumeBold",
        bulletFontSize=5,
        spaceAfter=3,
    )


def job_block(job, s):
    period, company, role, points = job
    return KeepTogether([
        Paragraph(period.upper(), s["period"]),
        Paragraph(company, s["company"]),
        Paragraph(role, s["job"]),
        bullets(points, s["body"]),
        Spacer(1, 4 * mm),
    ])


def build_resume(language):
    data = DATA[language]
    s = styles()
    OUTPUT.mkdir(parents=True, exist_ok=True)
    PUBLIC.mkdir(parents=True, exist_ok=True)
    path = OUTPUT / data["filename"]
    doc = BaseDocTemplate(
        str(path),
        pagesize=A4,
        leftMargin=16 * mm,
        rightMargin=16 * mm,
        topMargin=15 * mm,
        bottomMargin=19 * mm,
        title=data["name"],
        author="Sergey Ostaev",
        subject=data["role"],
    )
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="resume")
    doc.addPageTemplates(PageTemplate(id="resume", frames=[frame], onPage=page_frame))

    photo = Image(str(PHOTO), width=31 * mm, height=46.5 * mm)
    left = [
        Paragraph(data["eyebrow"], s["eyebrow"]),
        Paragraph(data["name"], s["name"]),
        Paragraph(data["role"], s["role"]),
        Paragraph(data["summary"], s["summary"]),
        Paragraph(data["location"], s["location"]),
    ]
    header = Table([[left, photo]], colWidths=[doc.width - 39 * mm, 31 * mm], hAlign="LEFT")
    header.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
        ("BOX", (1, 0), (1, 0), 0.8, LINE),
    ]))

    contact = Table([[Paragraph('<link href="https://t.me/Sergey_Designer"><b>Telegram</b> @Sergey_Designer</link>', s["small"]), Paragraph('<link href="mailto:sergiys1997@gmail.com"><b>Email</b> sergiys1997@gmail.com</link>', s["small"]), Paragraph('<link href="https://socreative.tilda.ws/"><b>Portfolio</b> socreative.tilda.ws</link>', s["small"])]], colWidths=[58 * mm, 68 * mm, 52 * mm])
    contact.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), PAPER),
        ("BOX", (0, 0), (-1, -1), 0.7, LINE),
        ("INNERGRID", (0, 0), (-1, -1), 0.5, LINE),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, -1), 7),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
    ]))

    metric_cells = [[Paragraph(value, s["metric_value"]), Paragraph(label, s["metric_label"])] for value, label in data["metrics"]]
    metric_table = Table([[cell for cell in metric_cells]], colWidths=[doc.width / 4] * 4)
    metric_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), colors.white),
        ("BOX", (0, 0), (-1, -1), 0.7, LINE),
        ("INNERGRID", (0, 0), (-1, -1), 0.5, LINE),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 9),
        ("RIGHTPADDING", (0, 0), (-1, -1), 9),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
    ]))

    story = [header, Spacer(1, 6 * mm), contact, Spacer(1, 5 * mm), metric_table, Spacer(1, 5 * mm), Paragraph(data["sections"][0], s["section"])]
    story.extend(job_block(job, s) for job in data["experience"][:2])
    story.extend([PageBreak(), Paragraph(data["sections"][0], s["section"]), job_block(data["experience"][2], s), Paragraph(data["sections"][1], s["section"]), bullets(data["achievements"], s["body"], CORAL), Spacer(1, 4 * mm), Paragraph(data["sections"][2], s["section"])])
    for item in data["education"]:
        story.extend([Paragraph(item, s["body"]), Spacer(1, 2.5 * mm)])
    story.extend([Paragraph(data["sections"][3], s["section"])])
    skill_rows = []
    for index in range(0, len(SKILLS), 4):
        skill_rows.append([Paragraph(skill, s["small"]) for skill in SKILLS[index:index + 4]])
    while len(skill_rows[-1]) < 4:
        skill_rows[-1].append("")
    skills_table = Table(skill_rows, colWidths=[doc.width / 4] * 4)
    skills_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), PAPER),
        ("BOX", (0, 0), (-1, -1), 0.6, LINE),
        ("INNERGRID", (0, 0), (-1, -1), 0.4, LINE),
        ("LEFTPADDING", (0, 0), (-1, -1), 7),
        ("RIGHTPADDING", (0, 0), (-1, -1), 7),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
    ]))
    story.append(skills_table)
    doc.build(story)
    copyfile(path, PUBLIC / data["filename"])
    return path


if __name__ == "__main__":
    register_fonts()
    for lang in ("ru", "en"):
        print(build_resume(lang))
