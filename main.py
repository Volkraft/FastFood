import telebot
from telebot import types
bot = telebot.TeleBot('7416917383:AAHiuhGVbRNj9GYolu84XxjHd3g5GCQBb_U')
@bot.message_handler(commands=['start'])
def start(message):
    markup = types.ReplyKeyboardMarkup()
    markup.add(types.KeyboardButton('Открыть веб-страницу'))
    bot.send_message(message.chat.id, text=f'Привествую', reply_markup=markup)
bot.polling()