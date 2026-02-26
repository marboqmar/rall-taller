import './Table.css';
import { classNames } from '../../../utils/helpers';

/**
 * Table component
 *
 * Component props:
 * @param {string} [className] - Additional CSS classes.
 * @param {node} children - Button content.
 * @param {object} [rest] - Additional props passed.
 * @param {boolean} isHeader - Renders a th rather than a td.
 *
 * @example
 * <Table>
 *   <Table.Header>
 *     <Table.Cell isHeader>Fruit</Table.Cell>
 *     <Table.Cell isHeader>color</Table.Cell>
 *   </Table.Header>
 *   <Table.Body>
 *     <Table.Row>
 *       <Table.Cell label="Fruit">Apple</Table.Cell>
 *       <Table.Cell label="color">Red</Table.Cell>
 *     </Table.Row>
 *     <Table.Row>
 *       <Table.Cell label="Fruit">Pear</Table.Cell>
 *       <Table.Cell label="color">Green</Table.Cell>
 *     </Table.Row>
 *   </Table.Body>
 * </Table>
 */

export const Table = ({ className = '', children, ...rest }) => {
  return (
    <table className={classNames('table', className)} role="table" {...rest}>
      {children}
    </table>
  );
};

Table.Header = ({ children }) => (
  <thead role="rowgroup" className="table__header">
    <tr role="row">{children}</tr>
  </thead>
);

Table.Body = ({ children }) => (
  <tbody className="table__body" role="rowgroup">
    {children}
  </tbody>
);

Table.Row = ({ children }) => (
  <tr className="table__row" role="row">
    {children}
  </tr>
);

Table.Cell = ({ children, isHeader, label }) => {
  const Component = isHeader ? 'th' : 'td';
  return (
    <Component className="table__cell" role={isHeader ? 'columnheader' : 'cell'} data-label={label}>
      {children}
    </Component>
  );
};
