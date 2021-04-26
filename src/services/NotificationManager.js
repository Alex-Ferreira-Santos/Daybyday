import PushNotification from 'react-native-push-notification'

class NotificationManager{
    configure(){
        PushNotification.configure({
            onNotification: notification => {
                console.log(notification)
            }
        })
        PushNotification.createChannel(
            {
              channelId: "123", // (required)
              channelName: "main", // (required)
              channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
              playSound: false, // (optional) default: true
              soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
              importance: 4, // (optional) default: 4. Int value of the Android notification importance
              vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
            },
            (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
        );
    }

    buildAndroidNotification(id, title, message, data = {}, options = {}){
        return {
            id: id,
            autoCancel: true,
            largeIcon: options.largeIcon || "ic_launcher",
            smallIcon: options.smallIcon || "ic_launcher",
            bigText: message || '',
            subText: title || '',
            vibrate: options.vibrate || false,
            vibration: options.vibration || 300,
            priority: options.priority || "high",
            importance: options.importance || "high",
            data: data            
        }
    }

    showNotification = async(id, title, message, data = {}, options = {}) => {
        PushNotification.localNotification({
            ...this.buildAndroidNotification(id, title, message, data, options),

            title: title || "",
            message: message || "",
            playSound: options.playSound || false,
            soundName: options.soundName || 'default',
            userInteraction: false,
            channelId: '123'
        })
    }

    cancelAllLocalNotification = () => {
        PushNotification.cancelAllLocalNotifications();
    }

    agendarNotificacao() {

        const data = [{
            id:1,
            title:'Novo cupom disponível!!!',
            message: 'Um cupom de R$15 acabou de sair especialmente para você, veja as possibilidades!',
            order: 1
          },{
            id:2,
            title:'Já provou nosso novo espaguete?',
            message: 'Temos uma nova receita para o nosso fabuloso espaguete com almôndegas, que tal pedir um para prová-lo?',
            order:2
          },{
            id:3,
            title:'Nossos pratos estão em promoção!!!',
            message: 'Diversos dos melhores pratos que temos estão em promoção, venha ver a lista completa!',
            order:3
        }]
        data.map(item => {
            PushNotification.localNotificationSchedule({
                id: item.id,
                date: new Date(Date.now()),
                channelId: '123',
                title: item.title,
                message: item.message,
                allowWhileIdle: false,
                color: "#FF4141",
            })
        })

    }
}

export const notificationManager = new NotificationManager();