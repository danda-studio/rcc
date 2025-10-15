interface ContainerBlureType {
    title: string;
    subTitle: string;
}

export const ContainerBlure = (props: ContainerBlureType) => {
    const {title, subTitle} = props;

    return (
        <div className="flex bg-radial-hero">
            <p>{title}</p>
            <p>{subTitle}</p>
        </div>
    );
}
