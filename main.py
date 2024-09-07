# bot = telebot.TeleBot('7416917383:AAHiuhGVbRNj9GYolu84XxjHd3g5GCQBb_U')
# @bot.message_handler(commands=['start'])
# def start(message):
#     markup = types.ReplyKeyboardMarkup()
#     markup.add(types.KeyboardButton('Открыть веб-страницу'))
#     bot.send_message(message.chat.id, text=f'Привествую', reply_markup=markup)
# bot.polling()

import asyncio
import logging
import sys
from os import getenv
from dotenv import load_dotenv
from aiogram import Bot, Dispatcher
from aiogram.types import Message
from aiogram.filters import CommandStart
import keyboard

load_dotenv()
TOKEN = getenv('BOT_TOKEN')
dp = Dispatcher()
@dp.message(CommandStart())
async def handelStart(message: Message):
    await message.answer('Привествую', reply_markup=keyboard.keyboard)