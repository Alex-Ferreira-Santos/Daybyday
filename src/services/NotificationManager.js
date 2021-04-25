import PushNotification from 'react-native-push-notification'

class NotificationManager{
    configure(){
        PushNotification.configure({
            onNotification: notification => {
                console.log(notification)
            }
        })
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

    showNotification = (id, title, message, data = {}, options = {}) => {
        PushNotification.localNotification({
            ...this.buildAndroidNotification(id, title, message, data, options),

            title: title || "",
            message: message || "",
            playSound: options.playSound || false,
            soundName: options.soundName || 'default',
            userInteraction: false
        })
    }

    cancelAllLocalNotification = () => {
        PushNotification.cancelAllLocalNotifications();
    }
}

export const notificationManager = new NotificationManager();