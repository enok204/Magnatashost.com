
import discord
from discord.ext import commands
import asyncio
import time

TOKEN = "YOUR_BOT_TOKEN_HERE"

intents = discord.Intents.default()
bot = commands.Bot(command_prefix='!', intents=intents)

@bot.event
async def on_ready():
    print(f'Bot {bot.user} está online!')
    # Set presence
    
    await bot.change_presence(
        status=discord.Status.online,
        activity=discord.Activity(
            type=discord.ActivityType.watching,
            name="Magnata Host – Em construção..."
        )
    )
    
    print('Presença configurada!')

@bot.command()
async def ping(ctx):
    await ctx.send('Pong! Bot está funcionando!')

# Keep bot running
async def main():
    try:
        await bot.start(TOKEN)
    except Exception as e:
        print(f'Erro ao iniciar bot: {e}')

if __name__ == "__main__":
    asyncio.run(main())
