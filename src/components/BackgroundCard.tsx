import type { IconType } from "react-icons";

export type BackgroundItem = {
    type: "EDUCATION" | "CERTIFICATION";
    title: string;
    organization: string;
    date: string;
    description: string;
    tags: string[];
    icon: IconType;
    titleIcon: IconType;
};

type BackgroundCardProps = {
    item: BackgroundItem;
};

export default function BackgroundCard({
    item,
}: BackgroundCardProps) {
    const Icon = item.icon;
    const TitleIcon = item.titleIcon;

    return (
        <div className="background-card">

            <div className="background-card-header">
                <span className="background-type">
                    {item.type}
                </span>

                <div className="background-icon">
                    <Icon />
                </div>
            </div>

            <div className="background-content">

                <div className="background-title-row">
                    <TitleIcon />

                    <div>
                        <h3>{item.title} - {item.organization}</h3>
                        <span className="background-date">
                            {item.date}
                        </span>
                    </div>
                </div>

                <p>{item.description}</p>

            </div>

            <div className="background-tags">
                {item.tags.map((tag) => (
                    <span key={tag}>
                        {tag}
                    </span>
                ))}
            </div>

        </div>
    );
}