import {Table, Toggle, TagPicker} from 'rsuite';
import {Perdidas} from '../../models/perdidas.interface';
import {Cliente} from '../../models/cliente.interface';
import {Tramos} from '../../models/tramos.interface';
import React, {useState} from 'react';
import {Column} from '../../models/columns.interface';
import {JSX} from 'react/jsx-runtime';
import {InnerCellProps} from 'rsuite-table/lib/Cell';
import {HeaderCellProps} from 'rsuite/esm/Table';
import './index.css';

const {Column, HeaderCell, Cell} = Table;

const CompactCell = (
  props: JSX.IntrinsicAttributes &
    InnerCellProps &
    React.RefAttributes<HTMLDivElement>,
) => <Cell {...props} style={{padding: 4}} />;
const CompactHeaderCell = (
  props: JSX.IntrinsicAttributes &
    HeaderCellProps &
    React.RefAttributes<HTMLDivElement>,
) => <HeaderCell {...props} style={{padding: 4}} />;

interface TableIDProps {
  data: Perdidas[] | Cliente[] | Tramos[] | undefined;
  defaultColumns: Column[];
  title: string;
}

const TableID = ({data, defaultColumns, title}: TableIDProps) => {
  const [loading, setLoading] = useState(false);
  const [compact, setCompact] = useState(true);
  const [bordered, setBordered] = useState(true);
  const [noData, setNoData] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [autoHeight, setAutoHeight] = useState(true);
  const [fillHeight, setFillHeight] = useState(false);
  const [hover, setHover] = useState(true);
  const [columnKeys, setColumnKeys] = React.useState(
    defaultColumns.map(column => column.key),
  );

  const columns = defaultColumns.filter(column =>
    columnKeys.some(key => key === column.key),
  );
  const CustomCell = compact ? CompactCell : Cell;
  const CustomHeaderCell = compact ? CompactHeaderCell : HeaderCell;

  return (
    <div className="table-container">
      <h2 className="title">{title}</h2>
      <div>
        <span className="toggle">
          Compact：
          <Toggle
            checkedChildren="On"
            unCheckedChildren="Off"
            checked={compact}
            onChange={setCompact}
          />
        </span>

        <span className="toggle">
          Bordered：
          <Toggle
            checkedChildren="On"
            unCheckedChildren="Off"
            checked={bordered}
            onChange={setBordered}
          />
        </span>

        <span className="toggle">
          Show Header：
          <Toggle
            checkedChildren="On"
            unCheckedChildren="Off"
            checked={showHeader}
            onChange={setShowHeader}
          />
        </span>

        <span className="toggle">
          Hover：
          <Toggle
            checkedChildren="On"
            unCheckedChildren="Off"
            checked={hover}
            onChange={setHover}
          />
        </span>
        <hr />
        {/* <span>
          Loading：
          <Toggle
            checkedChildren="On"
            unCheckedChildren="Off"
            checked={loading}
            onChange={setLoading}
          />
        </span>

        <span>
          No data：
          <Toggle
            checkedChildren="On"
            unCheckedChildren="Off"
            checked={noData}
            onChange={setNoData}
          />
        </span>

        <span>
          Auto Height：
          <Toggle
            checkedChildren="On"
            unCheckedChildren="Off"
            checked={autoHeight}
            onChange={setAutoHeight}
          />
        </span>

        <span>
          Fill Height：
          <Toggle
            checkedChildren="On"
            unCheckedChildren="Off"
            checked={fillHeight}
            onChange={setFillHeight}
          />
        </span> */}
      </div>
      {/* <hr /> */}
      Columns：
      <TagPicker
        data={defaultColumns}
        labelKey="label"
        valueKey="key"
        value={columnKeys}
        onChange={setColumnKeys}
        cleanable={false}
      />
      <hr />
      <div style={{height: autoHeight ? 'auto' : 400}}>
        <Table
          loading={loading}
          height={300}
          hover={hover}
          fillHeight={fillHeight}
          showHeader={showHeader}
          autoHeight={false}
          data={noData ? [] : data}
          bordered={bordered}
          cellBordered={bordered}
          headerHeight={compact ? 30 : 40}
          rowHeight={compact ? 30 : 46}>
          {columns.map(column => {
            const {key, label, ...rest} = column;
            return (
              <Column {...rest} key={key}>
                <CustomHeaderCell>{label}</CustomHeaderCell>
                <CustomCell dataKey={key} />
              </Column>
            );
          })}
        </Table>
      </div>
    </div>
  );
};

export default TableID;
