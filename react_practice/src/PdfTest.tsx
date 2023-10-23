import {
  Document,
  Font,
  Page,
  Text,
  StyleSheet,
  PDFDownloadLink,
  View,
  Image,
} from "@react-pdf/renderer";
import { format } from "date-fns";
// import { PiTemplateType } from 'src/types/pi';
import styled from "styled-components";

import logo from "../src/assets/logo.png";
import invoiceLogo from "../src/assets/invoiceLogo.png";
import sign from "../src/assets/sign.png";
import invoiceDownBtn from "../src/assets/invoiceDownBtn.svg";

Font.register({
  family: "SpoqaHanSans",
  src: "https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@01ff0283e4f36e159ffbf744b36e16ef742da6d8/Subset/SpoqaHanSans/SpoqaHanSansLight.ttf",
});

const styles = StyleSheet.create({
  page: {
    padding: 10,
    display: "flex",
    flexDirection: "column",
  },
  korean: {
    fontFamily: "SpoqaHanSans",
  },
});

const PiTemplate = () => {
  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Image src={logo} style={{ width: 200 }} />
        </View>
        <View
          style={{
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Text style={{ marginTop: 10, fontSize: 8 }}>
            3F, HANDOK BLDG, 2645, NAMBUSUNHWAN-RO, GANGNAM-GU, SEOUL, 06271,
            S.KOREA
          </Text>
          <Text style={{ marginTop: 10, fontSize: 8 }}>
            Tel : 02-576-5533 / Fax : 02-576-5599
          </Text>
        </View>

        <View
          style={{
            marginTop: 10,
            fontSize: 8,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text>Contact Point : Hyunah-Nam</Text>
          <Text>Date : </Text>
        </View>
        <View
          style={{
            marginTop: 5,
            fontSize: 8,
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Text>Due Date :</Text>
        </View>
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Image src={invoiceLogo} style={{ width: 150 }} />
          <View
            style={{
              fontSize: 8,
              flexDirection: "column",
              alignItems: "flex-end",
              color: "red",
              gap: 5,
            }}
          >
            <Text>
              *This invoice will be expired and booking will be canceled
            </Text>
            <Text>if you do not pay until the due date.</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", fontSize: 10, marginTop: 30 }}>
          <Text style={{ width: "20%" }}>Bill To.</Text>
          <Text style={[styles.korean, { width: "20%" }]}>buyer testName</Text>
          <Text style={{ width: "60%", textAlign: "right", fontSize: 9 }}>
            &lt;Ocean Outbound&gt;
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            height: 2,
            backgroundColor: "#1c0992",
            marginTop: 3,
          }}
        />
        <View style={{ flexDirection: "row", marginTop: 3 }}>
          <Text style={{ width: "20%", fontSize: 10 }}>INVOICE NO</Text>
          <Text style={{ width: "20%", fontSize: 9, color: "#434343" }}>
            PIL-20231019
          </Text>
          <View
            style={{
              width: "60%",
              flexDirection: "row",
              justifyContent: "center",
              gap: 50,
            }}
          >
            <Text
              style={{
                fontSize: 10,
              }}
            >
              INVOICE DATE
            </Text>
            <Text
              style={{
                fontSize: 9,
                color: "#75747F",
              }}
            ></Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            height: 2,
            backgroundColor: "#1c0992",
            marginTop: 20,
          }}
        />
        <View
          style={{
            marginTop: 15,
            paddingTop: 4,
            paddingBottom: 4,
            flexDirection: "row",
            fontSize: 10,
            backgroundColor: "#d9d9d9",
            borderBottom: "2px solid black",
          }}
        >
          <Text style={{ width: "23%", textAlign: "center" }}>DESCRIPTION</Text>
          <Text style={{ width: "11%", textAlign: "center" }}>CUR</Text>
          <Text style={{ width: "11%", textAlign: "center" }}>PER</Text>
          <Text style={{ width: "11%", textAlign: "center" }}>RATE</Text>
          <Text style={{ width: "11%", textAlign: "center" }}>AMT(CUR)</Text>
          <Text style={{ width: "11%", textAlign: "center" }}>EX.RATE</Text>
          <Text style={{ width: "11%", textAlign: "center" }}>AMT(KRW)</Text>
          <Text style={{ width: "11%", textAlign: "center" }}>VAT</Text>
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "column",
            gap: 5,
            paddingTop: 4,
            paddingBottom: 4,
          }}
        >
          <View
            style={{
              width: "100%",
              fontSize: 9,
              flexDirection: "row",
              color: "#434343",
            }}
          >
            <Text
              style={[styles.korean, { width: "23%", textAlign: "center" }]}
            >
              {`item.description`}
            </Text>
            <Text style={{ width: "11%", textAlign: "center" }}>USD</Text>
            <Text style={{ width: "11%", textAlign: "center" }}>
              {`item.unitSize`}
            </Text>
            <Text
              style={{ width: "11%", textAlign: "center" }}
            >{`{item.total.toLocaleString()}.00`}</Text>
            <Text style={{ width: "11%", textAlign: "center" }}>
              {`{item.total.toLocaleString()}.00`}
            </Text>
            <Text style={{ width: "11%", textAlign: "center" }}></Text>
            <Text style={{ width: "11%", textAlign: "center" }}></Text>
            <Text style={{ width: "11%", textAlign: "center" }}></Text>
          </View>
        </View>
        <View
          style={{
            borderTop: "2px solid black",
            borderBottom: "2px solid black",
            flexDirection: "row",
            paddingTop: 2,
            paddingLeft: 5,
            paddingBottom: 2,
          }}
        >
          <View
            style={{
              width: "48%",
            }}
          >
            <Text
              style={{
                fontSize: 11,
              }}
            >
              Total :
            </Text>
          </View>
          <View
            style={{
              width: "52%",
            }}
          >
            <Text
              style={{
                fontSize: 11,
              }}
            >
              {`(USD)      $20000`}
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 25, fontSize: 9 }}>
          <Text>[ REMARK ]</Text>
        </View>
        <View
          style={{
            width: "95%",
            marginTop: 5,
            fontSize: 9,
            textAlign: "right",
            color: "#5b72be",
          }}
        >
          <Text>{`piDetail!.piId`}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            fontSize: 9,
            gap: 50,
            marginTop: 100,
          }}
        >
          <View style={{ flexDirection: "column", gap: 8 }}>
            <Text>PORT OF LOADING</Text>
            <Text>PORT OF FINAL DESTINATION</Text>
            <Text>INSURANCE</Text>
            <Text>SPECIAL TERMS & CONDITIONS</Text>
          </View>
          <View style={{ flexDirection: "column", gap: 8 }}>
            <Text style={{ color: "#75747F" }}>
              {`{piDetail!.dptCountryNm.toLocaleUpperCase()} / {piDetail!.dptPortNm.toLocaleUpperCase()}`}
            </Text>
            <Text
              style={{ color: "#75747F" }}
            >{`piDetail!.arvCountryNm.toLocaleUpperCase()} / {piDetail!.arvPortNm.toLocaleUpperCase()`}</Text>
            <Text style={{ color: "#75747F" }}>NONE</Text>
            <Text style={{ color: "#75747F" }}>NONE</Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            height: 1,
            backgroundColor: "#a9a9a9",
            marginTop: 20,
          }}
        />
        <View
          style={{
            width: "100%",
            height: 1,
            backgroundColor: "#a9a9a9",
            marginTop: 2,
          }}
        />
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 10 }}>*BANK ACCOUNT FOR T/T*</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            fontSize: 9,
            gap: 15,
            marginTop: 30,
          }}
        >
          <View style={{ flexDirection: "column", gap: 8 }}>
            <Text>BENEFICIARY'S NAME</Text>
            <Text>BENEFICIARY'S ADDRESS</Text>
            <Text>BANK ACCOUNT NO.</Text>
            <Text>BANK NAME</Text>
            <Text>SWIFT</Text>
            <Text>BANK ADDRESS</Text>
          </View>
          <View style={{ flexDirection: "column", gap: 8 }}>
            <Text style={{ color: "#75747F" }}>WINI LOGISTICS INC.</Text>
            <Text style={{ color: "#75747F" }}>
              {`3F, HANDOK BLDG., 2645, NAMBUSUNHWAN-RO, 
              GANGNAM-GU, SEOUL, 06271, SOUTH KOREA`}
            </Text>
            <Text style={{ color: "#75747F" }}>150-910011-16538</Text>
            <Text style={{ color: "#75747F" }}>KEB HANA BANK</Text>
            <Text style={{ color: "#75747F" }}>KOEXKRSEXXX</Text>
            <Text style={{ color: "#75747F" }}>
              66, ULCHIRO, JUNG-GU, SEOUL, KOREA
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>Signed by</Text>
            <Image src={sign} style={{ width: 150 }} />
          </View>
        </View>
      </Page>
    </Document>
  );

  return (
    <>
      (
      <DownLoadBtn>
        <PDFDownloadLink
          document={<MyDocument />}
          fileName={`LPI_${format(new Date(), "yyyy_MM_dd")}`}
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : <img src={invoiceDownBtn} />
          }
        </PDFDownloadLink>
      </DownLoadBtn>
      )
    </>
  );
};

export default PiTemplate;

const DownLoadBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
  background: #e9e5fd;
  border: 2px solid #6f5fcb;
  border-radius: 0.5rem;
  font-size: 1.8rem;
  color: #6f5fcb;
`;
