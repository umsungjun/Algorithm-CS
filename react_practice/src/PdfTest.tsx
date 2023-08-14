import {
  Document,
  Page,
  Text,
  StyleSheet,
  PDFDownloadLink,
  View,
  Image,
} from "@react-pdf/renderer";
import testLogo from "../src/assets/testLogo.png";

const styles = StyleSheet.create({
  page: {
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    paddingBottom: 30,
  },
  invoiceInfoTitle: {
    fontSize: 10,
  },
  invoiceInfoSub: {
    fontSize: 10,
    width: 100,
    color: "#75747F",
    textAlign: "right",
  },
  tableHeaderBox: {
    flexDirection: "row",
    gap: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 3,
    marginBottom: 3,
    backgroundColor: "#e9e9e9",
  },
  tableHeader: {
    fontSize: 11,
    textAlign: "center",
  },
  tableBody: {
    fontSize: 11,
    color: "#75747F",
    textAlign: "center",
  },
});

const InvoiceDownload = () => {
  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Image src={testLogo} style={{ width: "40%" }} />
          {/* TODO: INVOICE로고 들어가야 함 */}
          <View
            style={{
              width: "40%",
              flexDirection: "row",
              justifyContent: "space-around",
              gap: 50,
            }}
          >
            <View style={{ flexDirection: "column", gap: 3 }}>
              <Text style={styles.invoiceInfoTitle}>Invoice No.</Text>
              <Text style={styles.invoiceInfoTitle}>Staff.</Text>
              <Text style={styles.invoiceInfoTitle}>Date of Issue.</Text>
              <Text style={styles.invoiceInfoTitle}>Payment Due Date.</Text>
            </View>
            <View style={{ flexDirection: "column", gap: 3 }}>
              <Text style={styles.invoiceInfoSub}>PI-202304366521</Text>
              <Text style={styles.invoiceInfoSub}>Maria</Text>
              <Text style={styles.invoiceInfoSub}>Apr 24 2023</Text>
              <Text style={styles.invoiceInfoSub}>May 08 2023</Text>
            </View>
          </View>
        </View>
        <Text style={{ fontSize: 10, marginTop: 5 }}>Bill To.</Text>
        <View
          style={{
            width: "105%",
            flexDirection: "column",
            marginTop: 10,
            gap: 7,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 15 }}>ALBRIT AUTO IMPORT, SRL</Text>
            <Text style={{ fontSize: 10, color: "#75747F" }}>
              RNC: 131-89608-1
            </Text>
          </View>
          <Text style={{ fontSize: 11, color: "#75747F" }}>
            Calle Domingo Bermudez, Esquina Avenidad Enriquillo, Saniago lod
            Odballerors, Rep. Dom.
          </Text>
          <Text>
            <Text style={{ fontSize: 11 }}>Tel :</Text>
            <Text style={{ fontSize: 10, color: "#75747F" }}>
              +1 (809)719-2721
            </Text>
          </Text>
        </View>
        {/* 테이블 */}
        <View style={{ width: "105%" }}>
          <View style={styles.tableHeaderBox}>
            <Text
              style={{
                fontSize: 11,
                flex: "1 1 0",
                textAlign: "center",
              }}
            >
              Item & Description
            </Text>
            <Text style={styles.tableHeader}>Unit</Text>
            <Text style={styles.tableHeader}>Unit Price</Text>
            <Text style={styles.tableHeader}>Total Price</Text>
          </View>

          {/* 테이블 데이터 */}
          <View
            style={{
              flexDirection: "row",
              gap: 20,
            }}
          >
            <Text style={{ fontSize: 11, flex: "1 1 0", textAlign: "left" }}>
              Item 1
            </Text>
            <Text style={styles.tableBody}>1</Text>
            <Text style={styles.tableBody}>12,898</Text>
            <Text style={styles.tableBody}>12,898</Text>
          </View>

          {/* 테이블 데이터 */}
        </View>
      </Page>
    </Document>
  );

  return (
    <div>
      <PDFDownloadLink document={<MyDocument />} fileName="Invoice.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download PDF"
        }
      </PDFDownloadLink>
    </div>
  );
};

export default InvoiceDownload;
