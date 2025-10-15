interface ContainerBlureType {
    title: string;
    subTitle: string;
}

export const ContainerBlure = (props: ContainerBlureType) => {
    const {title, subTitle} = props;

    return (
        <div className="flex items-center border border-white rounded-2xl px-4 py-2 gap-2 bg-radial-hero">
            <p>{title}</p>
            <p>{subTitle}</p>
        </div>
    );
}
