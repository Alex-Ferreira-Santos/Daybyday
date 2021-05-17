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

    ScheduleWaterNotification(ml) {
        const minutes = parseInt(new Date().getMinutes())
        PushNotification.localNotificationSchedule({
            id: 1.1,
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

    ScheduleTaskNotification(date,title,priority,id){
        let prioridade
        switch(priority){
            case 'Baixa':
                prioridade = 'low'
                break
            case 'Média':
                prioridade = 'low'
                break
            case 'Alta':
                prioridade = 'high'
                break
        }
        PushNotification.localNotificationSchedule({
            id: id,
            date: new Date(`${date}`),
            channelId: '123',
            title: `Está na hora da tarefa de ${title}❗`,
            message: `A tarefa de ${title} está na hora de ser feita 📋`,
            allowWhileIdle: false,
            color: "yellow",
            priority: prioridade
        })
    }

    ScheduleSleepNotification(date) {
        date = new Date((Date.parse(date) + 24 * 60 * 60 * 1000) - 8 * 60 * 60 * 1000).toString()
        PushNotification.localNotificationSchedule({
            id: 2.1,
            date: new Date(date),
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