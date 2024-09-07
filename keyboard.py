from aiogram import types
from aiogram.types import WebAppInfo
webApp = WebAppInfo(url='https://volkraft.github.io/FastFood/')
keyboard = types.ReplyKeyboardMarkUp(
    keyboard=[
    types.KeyboardButton(text='Перейти к заказу', web_app=webApp)
    ]
)
