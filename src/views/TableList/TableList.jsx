import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

const styles = {

  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

function TableList(props) {
  const { classes } = props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="success">
            <h4 className={classes.cardTitleWhite}>Client Detail</h4>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Name", "Country", "ID", "Status"]}
              tableData={[
                ["Dakota Rice", "Florida", "2343", "Active"],
                ["Minerva Hooper", "New York", "3243", "In-active"],
                ["Sage Rodriguez", "California", "7960", "Active"],
                ["Philip Chaney", "Texas", "3345", "Actve"],
                ["Doris Greene", "Georgia", "5654", "Active"],
                ["Mason Porter", "California", "7657", "Active"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="success">
            <h4 className={classes.cardTitleWhite}>
              Manage Users
            </h4>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Name", "Role", "Joined Date", "Phone"]}
              tableData={[
                ["Dakota Rice", "Doctor", "09/04/2013", "(676) 445-7642"],
                ["Minerva Hooper", "Pratitioner", "13/05/2012", "(676) 345-9808"],
                ["Sage Rodriguez", "FrontDesk", "01/12/2009", "(646) 243-8978"],
                [

                  "Philip Chaney",
                  "Pratitioner",
                  "19/07/2005",
                  "(223) 787-6786"
                ],
                [

                  "Doris Greene",
                  "Doctor",
                  "09/09/2005",
                  "Feldkirchen in Kärnten"
                ],
                ["Mason Porter", "Doctor", "20/08/2002", "(122) 345-9090"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

export default withStyles(styles)(TableList);
