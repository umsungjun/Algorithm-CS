import { Document, Page, Text } from "@react-pdf/renderer";
export default function PdfDocument() {
  return (
    <Document>
      <Page>
        <Text>Hello, this is a PDF content!</Text>
      </Page>
    </Document>
  );
}
