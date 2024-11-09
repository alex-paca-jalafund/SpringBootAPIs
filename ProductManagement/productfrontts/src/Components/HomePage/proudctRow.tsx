interface ProductRowProps {
    info: string;
    row: string
}

export const ProductRow: React.FC<ProductRowProps> = ({ info, row }) => {
    return (
        <p className="text-sm p-2">{row} : {info}</p>
    );
};
