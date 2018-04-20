// Conectodos Ping
// 

#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>

#define FIREBASE_HOST "conectodosping.firebaseio.com"
#define FIREBASE_AUTH "Kwrq38oCDoe6V14UBe664euUv3lpMPbgnnVzFltj"//  secreto de la base de satos
#define WIFI_SSID "ROMERO"//modificar credenciales
#define WIFI_PASSWORD "romero2016"


void setup()
{
	Serial.begin(9600);
	WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  	while (WiFi.status() != WL_CONNECTED) {
    	delay(500);
  	} 
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
	
}



void loop()
{
	Firebase.setInt("ping", 1);
	delay(500);
	Firebase.setInt("ping", 0);
	delay(500);


}