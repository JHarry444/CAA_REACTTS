import type { ReactNode } from "react";

function Table({ children }: { children: ReactNode | ReactNode[] }) {
    return (<table className="myTable">
        <caption>Trainers</caption>
        {
            children
        }
    </table>);
}

export default Table;