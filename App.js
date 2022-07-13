import React, {useState} from 'react';
import {StyleSheet, View,Button,Alert,Text} from 'react-native';
import {MultiSelect} from 'react-native-element-dropdown';

const result = [
  {
    ACIKLAMA: 'Çıkartabileceğiniz Ürünler',
    PR_TR: '2',
    DETDETID: '-1',
    DETAY: [
      {ALT_PR_KOD: '', ACIKLAMA: 'Mısır', PR_TR: '2', FIYAT: '', DETDETID: '0'},
      {ALT_PR_KOD: '', ACIKLAMA: 'Sos', PR_TR: '2', FIYAT: '', DETDETID: '0'},
      {
        ALT_PR_KOD: '',
        ACIKLAMA: 'Mozerella',
        PR_TR: '2',
        FIYAT: '',
        DETDETID: '0',
      },
      {
        ALT_PR_KOD: '',
        ACIKLAMA: 'Dilim Patetes',
        PR_TR: '2',
        FIYAT: '',
        DETDETID: '0',
      },
      {
        ALT_PR_KOD: '',
        ACIKLAMA: 'Beşamel',
        PR_TR: '2',
        FIYAT: '',
        DETDETID: '0',
      },
    ],
  },
  {
    ACIKLAMA: 'Porsiyon Seçenekleri',
    PR_TR: '3',
    DETDETID: '-1',
    DETAY: [
      {
        ALT_PR_KOD: '',
        ACIKLAMA: 'Yarım',
        PR_TR: '3',
        FIYAT: '35',
        DETDETID: '0',
      },
      {
        ALT_PR_KOD: '',
        ACIKLAMA: 'Duble ',
        PR_TR: '3',
        FIYAT: '70',
        DETDETID: '0',
      },
    ],
  },
  {
    ACIKLAMA: 'Özel İstekler',
    PR_TR: '4',
    DETDETID: '-1',
    DETAY: [
      {
        ALT_PR_KOD: '',
        ACIKLAMA: 'Çok Sıcak Servis Edilsin',
        PR_TR: '4',
        FIYAT: '',
        DETDETID: '0',
      },
      {
        ALT_PR_KOD: '',
        ACIKLAMA: 'Acı Olmasın',
        PR_TR: '4',
        FIYAT: '',
        DETDETID: '0',
      },
      {
        ALT_PR_KOD: '',
        ACIKLAMA: 'Çok Acı Olsun',
        PR_TR: '4',
        FIYAT: '',
        DETDETID: '0',
      },
      {
        ALT_PR_KOD: '',
        ACIKLAMA: 'Sosu Fazla Olsun',
        PR_TR: '4',
        FIYAT: '',
        DETDETID: '0',
      },
    ],
  },
];

const MultiSelectComponent = () => {
  const [selected, setSelected] = useState([]);

  console.log(selected);

  return (
    <View style={styles.container}>
      <MultiSelect
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        search={false}
        data={result[0].DETAY}
        labelField="ACIKLAMA"
        valueField="ACIKLAMA"
        placeholder={result[0].ACIKLAMA}
        activeColor="#90ee90"
        value={selected}
        onChange={item => {
          setSelected(item);
        }}
        selectedStyle={styles.selectedStyle}
      />

      <MultiSelect
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        search={false}
        data={result[1].DETAY}
        labelField="ACIKLAMA"
        valueField="ACIKLAMA"
        placeholder={result[1].ACIKLAMA}
        activeColor="#90ee90"
        value={selected}
        onChange={item => {
          setSelected(item);
        }}
        selectedStyle={styles.selectedStyle}
      />
      <MultiSelect
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        search={false}
        data={result[2].DETAY}
        labelField="ACIKLAMA"
        valueField="ACIKLAMA"
        placeholder={result[2].ACIKLAMA}
        value={selected}
        activeColor="#90ee90"
        onChange={item => {
          setSelected(item);
        }}
        selectedStyle={styles.selectedStyle}
      />
      <View style={{flexDirection: 'row',marginTop:100}}>
    <Button
        title="Masadan Sipariş Ver"
        onPress={() => Alert.prompt('Masa Numarınızı giriniz.!')}
      />
     
      <Button
        title="Evden Sipariş Ver"
        onPress={() => Alert.prompt('Siparişiniz nereye gelsin?')}
      />
      </View>
    </View>
  );
};

export default MultiSelectComponent;

const styles = StyleSheet.create({
  container: {padding: 16, marginTop: 100, margin: 20},
  dropdown: {
    height: 40,
    backgroundColor: 'transparent',
    borderBottomColor: 'green',
    borderBottomWidth: 0.5,
  },
  placeholderStyle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedTextStyle: {
    fontSize: 14,
    color: 'dark',
    fontWeight: 'bold',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  icon: {
    marginRight: 5,
  },
  selectedStyle: {
    borderRadius: 12,
    backgroundColor: '#90ee90',
  },
});
