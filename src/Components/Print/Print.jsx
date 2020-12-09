import React, { useState } from 'react';
import { Document, Page, PDFViewer, Text, View, StyleSheet } from '@react-pdf/renderer';
 
function MyApp() {
  return (
    <div>
      <PDFViewer style={{height:'100vh'}} width="100%">
        <Document
        >
          <Page swidth="50%" size="A4" >
            <View style={{marginLeft:'auto', marginRight:'auto', width:'90%'}}  >
                  <Text style={{marginBottom:'20px'}}>Inventory Items</Text>
                  <View style={{marginBottom:'20px'}}>
                  <Text>Name:</Text>
                  <Text>Model:</Text>
                  <Text>Qty:</Text>
                  <Text>Price:</Text>
                  <Text>Department:</Text>
                  </View>
                  <View style={{marginBottom:'20px'}}>
                  <Text>Name:</Text>
                  <Text>Model:</Text>
                  <Text>Qty:</Text>
                  <Text>Price:</Text>
                  <Text>Department:</Text>
                  </View>

                  <View style={{marginBottom:'20px'}}>
                  <Text>Name:</Text>
                  <Text>Model:</Text>
                  <Text>Qty:</Text>
                  <Text>Price:</Text>
                  <Text>Department:</Text>
                  </View>
                  <View style={{marginBottom:'20px'}}>
                  <Text>Name:</Text>
                  <Text>Model:</Text>
                  <Text>Qty:</Text>
                  <Text>Price:</Text>
                  <Text>Department:</Text>
                  </View>
                  <View style={{marginBottom:'20px'}}>
                  <Text>Name:</Text>
                  <Text>Model:</Text>
                  <Text>Qty:</Text>
                  <Text>Price:</Text>
                  <Text>Department:</Text>
                  </View>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
}

export default MyApp