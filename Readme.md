# localizationExample

Bu uygulama, React Native ve Expo kullanarak çoklu dil desteği (lokalizasyon) sunan örnek bir mobil uygulamadır. Kullanıcıların cihaz diline göre arayüz otomatik olarak Türkçe veya İngilizce olarak gösterilir. Ayrıca kullanıcılar uygulama içinden dili manuel olarak değiştirebilir ve tercihleri kaydedilir.

## Özellikler

- Otomatik cihaz dili algılama
- İngilizce ve Türkçe arayüz desteği
- Manuel dil seçimi ve tercihin saklanması
- Kolay yeni dil ekleme

## Kullanılan Teknolojiler

- React Native
- Expo
- i18next & react-i18next
- expo-localization
- AsyncStorage

## Kurulum

1. Bağımlılıkları yükleyin:
   ```sh
   npm install
   ```
2. Uygulamayı başlatın:
   ```sh
   npm start
   ```

## Dil Eklemek

Yeni bir dil eklemek için `translations` klasörüne ilgili dilde bir JSON dosyası ekleyip `i18n.js` dosyasını güncellemeniz yeterlidir.