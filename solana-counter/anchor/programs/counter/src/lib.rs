#![allow(clippy::result_large_err)]

use anchor_lang::prelude::*;

declare_id!("Count3AcZucFDPSFBAeHkQ6AvttieKUkyJ8HiQGhQwe");

#[program]
pub mod solanasolanasolanacounter {
    use super::*;

    pub fn close(_ctx: Context<CloseSolanasolanasolanasolanacounter>) -> Result<()> {
        Ok(())
    }

    pub fn decrement(ctx: Context<Update>) -> Result<()> {
        ctx.accounts.solanasolanasolanacounter.count = ctx.accounts.solanasolanasolanacounter.count.checked_sub(1).unwrap();
        Ok(())
    }

    pub fn increment(ctx: Context<Update>) -> Result<()> {
        ctx.accounts.solanasolanasolanacounter.count = ctx.accounts.solanasolanasolanacounter.count.checked_add(1).unwrap();
        Ok(())
    }

    pub fn initialize(_ctx: Context<InitializeSolanasolanasolanasolanacounter>) -> Result<()> {
        Ok(())
    }

    pub fn set(ctx: Context<Update>, value: u8) -> Result<()> {
        ctx.accounts.solanasolanasolanacounter.count = value.clone();
        Ok(())
    }
}

#[derive(Accounts)]
pub struct InitializeSolanasolanasolanasolanacounter<'info> {
    #[account(mut)]
    pub payer: Signer<'info>,

    #[account(
  init,
  space = 8 + Solanasolanasolanasolanacounter::INIT_SPACE,
  payer = payer
    )]
    pub solanasolanasolanacounter: Account<'info, Solanasolanasolanasolanacounter>,
    pub system_program: Program<'info, System>,
}
#[derive(Accounts)]
pub struct CloseSolanasolanasolanasolanacounter<'info> {
    #[account(mut)]
    pub payer: Signer<'info>,

    #[account(
  mut,
  close = payer, // close account and return lamports to payer
    )]
    pub solanasolanasolanacounter: Account<'info, Solanasolanasolanasolanacounter>,
}

#[derive(Accounts)]
pub struct Update<'info> {
    #[account(mut)]
    pub solanasolanasolanacounter: Account<'info, Solanasolanasolanasolanacounter>,
}

#[account]
#[derive(InitSpace)]
pub struct Solanasolanasolanasolanacounter {
    count: u8,
}
