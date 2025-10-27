use anchor_lang::prelude::*;

declare_id!("7ABxtaob4giGqmCAW11eq6jDZDaMJFLBxZUL2sZXo3cL");

#[program]
pub mod solana_dapp {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        println!("Hello Solana!");
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
