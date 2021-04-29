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


    ScheduleWaterNotification(ml) {
        const minutes = parseInt(new Date().getMinutes())
        PushNotification.localNotificationSchedule({
            id: 1,
            date: new Date(Date.now() + minutes*(60*1000)),
            channelId: '123',
            title: 'Lembrete de água 💧',
            message: `Está na hora de você beber outro copo de água, lembre-se de tomar um copo de ${ml.toFixed()}ml`,
            allowWhileIdle: false,
            color: "yellow",
            repeatType:'time',
            repeatTime:60*(60*1000)
        })
    }

    cancelWaterNotifications(id){
        PushNotification.cancelLocalNotifications({id:id})
    }

    ScheduleSleepNotification(hour) {
        console.log(hour)
        PushNotification.localNotificationSchedule({
            id: 2,
            date: new Date(),
            channelId: '123',
            title: 'Está perto da hora de dormir 💤💤',
            message: `Para manter um sono controlado, você deve dormir dentro de 30 minutos, lembre-se de colocar um despertador para não passar do horário ⏰`,
            allowWhileIdle: false,
            color: "yellow",
        })
    }
}

export const notificationManager = new NotificationManager();