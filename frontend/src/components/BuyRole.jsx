import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Fab from '@material-ui/core/Fab';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { lighten } from '@material-ui/core/styles/colorManipulator';

let counter = 0;
function createData(name, price, color, summary) {
  counter += 1;
  return { id: counter, name, color, price, summary };
}

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const rows = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
  { id: 'price', numeric: true, disablePadding: false, label: 'Price ($)' },
  { id: 'colors', string: true, disablePadding: false, label: 'Colors' },
  { id: 'summary', string: true, disablePadding: false, label: 'Summary' },
];

class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, showstate } = this.props;

    return (
      <TableHead>
        <TableRow style={{ display: showstate }}>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
            />
           
          </TableCell>
          {rows.map(
            row => (
              <TableCell
                key={row.id}
                align="center"
                sortDirection={orderBy === row.id ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === row.id}
                    direction={order}
                    onClick={this.createSortHandler(row.id)}
                  >
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            ),
            this,
          )}
        </TableRow>
      </TableHead>
    );
  }
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const styles = theme => ({
  
});

class BuyRole extends React.Component {
  state = {
    order: 'asc',
    orderBy: 'calories',
    selected: [],
    data: [
      createData('Cupcake', 305,'red', 67),
      createData('Donut', 452, 'yellow', 51),
      createData('Eclair', 262, 'brown', 24),
      createData('Frozen yoghurt', 262,'blue', 24),
      createData('Gingerbread', 356, 'green', 49),
      createData('Honeycomb', 408, 'white', 87),
      createData('Cupcake', 305,'red', 67),
      createData('Donut', 452, 'yellow', 51),
      createData('Eclair', 262, 'brown', 24),
      createData('Frozen yoghurt',33, 'blue', 24),
      createData('Gingerbread', 356, 'green', 49),
      createData('Honeycomb', 408, 'white', 87),
    ],
    page: 0,
    rowsPerPage: 5,
  };

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  };

  handleSelectAllClick = event => {
    if (event.target.checked) {
      this.setState(state => ({ selected: state.data.map(n => n.id) }));
      return;
    }
    this.setState({ selected: [] });
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    console.log(selected);
    this.setState({ selected: newSelected });
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    const { classes } = this.props;
    const { data, order, orderBy, selected, rowsPerPage, page } = this.state;

    return (
      <div className="buyrole-main-div">
        <Paper className="buyrole-root" style={{boxShadow: 'none'}}>
          <p className="buyrole-p"> Total price is <strong></strong>$</p>
          <div className="buyrole-tablewrapper-div">
            <div className="buyrole-tablehead-div">
              <Table aria-labelledby="tableTitle">
                <EnhancedTableHead
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={this.handleSelectAllClick}
                  onRequestSort={this.handleRequestSort}
                  rowCount={data.length}
                />
              </Table>
            </div>
            <div className="buyrole-tablewrapper">
              <Table aria-labelledby="tableTitle">
                <EnhancedTableHead
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={this.handleSelectAllClick}
                  onRequestSort={this.handleRequestSort}
                  rowCount={data.length}
                />
                <TableBody className="buyrole-table" >
                  {stableSort(data, getSorting(order, orderBy))
                    .map(n => {
                      const isSelected = this.isSelected(n.id);
                      return (
                        <TableRow
                          hover
                          onClick={event => this.handleClick(event, n.id)}
                          role="checkbox"
                          aria-checked={isSelected}
                          tabIndex={-1}
                          key={n.id}
                          selected={isSelected}
                        >
                          <TableCell padding="checkbox">
                            <Checkbox checked={isSelected} />
                          </TableCell>
                          <TableCell align="center" component="th" scope="row" padding="none">
                            {n.name}
                          </TableCell>
                          <TableCell align="center">{n.price}</TableCell>
                          <TableCell align="center">
                              <button style={{ background: n.color }} className="buyrole-colorbtn"></button>
                            </TableCell>
                          <TableCell align="center">{n.summary}</TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </div>
          </div>
        </Paper>
        <div className="buyrole-paybtn-div">
          <Fab
              variant="extended"
              size="large"
              align="center"
              color="primary"
              aria-label="Add"
              className={classes.margin} 
              style = {{ alignSelf: 'center', width: '150px' }}
            >
              {/* <NavigationIcon className={classes.extendedIcon} /> */}
              <p className="buyrole-pay-p">PAY</p>
            </Fab>
        </div>
      </div>
    );
  }
}

BuyRole.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BuyRole);
