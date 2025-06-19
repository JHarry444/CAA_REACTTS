import Table from "./Table";

function ComponentsWithKids() {
    return (<Table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Specialty</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Jordan</td>
                <td>Java</td>
            </tr>
            <tr>
                <td>Cameron</td>
                <td>Web</td>
            </tr>
        </tbody>
    </Table>);
}

export default ComponentsWithKids;