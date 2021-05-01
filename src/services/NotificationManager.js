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

    cancelNotifications(id){
        PushNotification.cancelLocalNotifications({id:id})
    }

    ScheduleTaskNotification(date,title,priority){
        PushNotification.localNotificationSchedule({
            id: 1,
            date: '',
            channelId: '123',
            title: 'Lembrete de água 💧',
            message: `Está na hora de você beber outro copo de água, lembre-se de tomar um copo de ${ml.toFixed()}ml`,
            allowWhileIdle: false,
            color: "yellow",
        })
    }

    ScheduleSleepNotification(hour) {
        
        let month
        let day

        if(new Date().getUTCMonth() + 1 > 9){
            month = new Date().getUTCMonth() + 1
        }else{
            month = `0${new Date().getUTCMonth() + 1}`
        }

        if(new Date() > new Date(`${new Date().getFullYear()}-${month}-${new Date().getDate()}T${hour.trim()}:00.000Z`)){
            if([4,6,9,11].includes(new Date().getMonth() + 1)){
                if(new Date().getDate() + 1 > 30){
                    day = 1
                }else{
                    day = new Date().getDate() + 1
                }
            }else{
                if(new Date().getMonth() + 1 == 2){
                    if(new Date().getDate() + 1 > 28){
                        day = 1
                    }else{
                        day = new Date().getDate() + 1
                    }
                }else{
                    if(new Date().getDate() + 1 > 31){
                        day = 1
                    }else{
                        day = new Date().getDate() + 1
                    } 
                } 
            }
            
        }else{
            day = new Date().getDate()
        }
        if(day < 10){
            day = `0${day}`
        }
        const timezone = new Date().getTimezoneOffset()/60

        Date.prototype.addHours = function (value) {
            this.setHours(this.getHours() + value);
        }
        var data = new Date(`${new Date().getFullYear()}-${month}-${day}T${hour.trim()}:00.000Z`);
        data.addHours(-(8+timezone));
        PushNotification.localNotificationSchedule({
            id: 2,
            date: data,
            channelId: '123',
            title: 'Está na hora de dormir 💤💤',
            message: `Para manter um sono controlado, você deve dormir dentro de 10 minutos, lembre-se de colocar um despertador para não passar do horário ⏰`,
            allowWhileIdle: false,
            color: "yellow",
            repeatType: 'day',
        })
    }
}

export const notificationManager = new NotificationManager();