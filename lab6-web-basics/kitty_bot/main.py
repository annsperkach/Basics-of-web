from typing import Final
from telegram import Update, Bot
from telegram.ext import Application, CommandHandler, MessageHandler, filters, ContextTypes

TOKEN: Final = '6968315885:AAFX8g3Crn-Z6TxfgLeoX1EGfnvh7n-Cb4c'
BOT_USERNAME: Final = '@HappydaywithKitty_bot'

async def start_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("Hello! Thanks for chatting with me! I am a kitty Minni!")
    
async def help_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("I am a kitty Minni! Please type something, so I can respond")
    
async def custom_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("This is a custom command!")
    
    
# Responses
def handle_responses(text: str) -> str:
    processed: str = text.lower()
    
    if 'hello' in processed:
        return 'Hey there!'
    
    if 'how are you' in processed:
        return 'I am good, meow!'
    
    if 'thanks for helping' in processed:
        return 'thank u too!'
    
    # if 'send me kitty photo' in processed:
    #     bot = Bot(token=TOKEN)
    #     bot.send_photo(chat_id=381188796, photo=open('kitty1.jpg', 'rb'))
    #     return 'Sure! Here is a kitty photo for you.'
    
    return 'I do not understand what you wrote...'
        
        
async def handle_message(update: Update, context: ContextTypes.DEFAULT_TYPE):
    message_type: str = update.message.chat.type
    text: str = update.message.text
    
    print(f'User ({update.message.chat.id}) in {message_type}: "{text}"')
    
    if message_type == "group":
        if BOT_USERNAME in text:
            new_text: str = text.replace(BOT_USERNAME, '').strip()
            response: str = handle_responses(new_text)
        else:
            return
    else: 
        response: str = handle_responses(text)

    print('Bot:', response)
    await update.message.reply_text(response)
    
    
async def error(update: Update, context: ContextTypes.DEFAULT_TYPE):
    print(f'Update {update} caused error {context.error}')
    
    
if __name__ == '__main__':
    print('Starting bot...')
    app = Application.builder().token(TOKEN).build()
    
#Commands
    app.add_handler(CommandHandler('start', start_command))
    app.add_handler(CommandHandler('help', help_command)) 
    app.add_handler(CommandHandler('custom', custom_command))
    
    
    #Messages
    app.add_handler(MessageHandler(filters.TEXT, handle_message))
    
    #Errors
    app.add_error_handler(error)
    
    #Polls the bot
    print('Polling...')
    app.run_polling(poll_interval=3)