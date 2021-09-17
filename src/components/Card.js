import React from 'react';

const Card = ({ data }) => {
    return (
        <div className="wrapper">
            <div className="card">
                <div className="card__image card__image--pokemon">
                    {data ?
                        <img src={data.sprites["front_default"]} alt="pokemon" />
                        :
                        null
                    }
                </div>
                <div className="clash-card__level">Pokemon</div>
                {data ?
                    <div className="clash-card__unit-name">{data.name}</div>
                    : null
                }

                <div className="clash-card__unit-stats no-border-botttom clearfix">
                    <div className="one-third">
                        <div className="stat">{data ? data.types[0].type.name : null}</div>
                        <div className="stat-value">Type</div>
                    </div>

                    <div className="one-third">
                        <div className="stat">{data ? Math.round(data.height * 10) + " cm" : null }</div>
                        <div className="stat-value">Height</div>
                    </div>

                    <div className="one-third no-border">
                        <div className="stat">{data ? Math.round(data.weight / 10) + " kgs" : null}</div>
                        <div className="stat-value">Weight</div>
                    </div>

                </div>
                <div className="clash-card__unit-stats clearfix">
                    <div className="one-third">
                        <div className="stat">{data ? data.abilities[0].ability.name : null}</div>
                        <div className="stat-value">Ability</div>
                    </div>

                    <div className="one-third">
                        <div className="stat">{data ? data.moves[0].move.name : null}</div>
                        <div className="stat-value">Move</div>
                    </div>

                    <div className="one-third no-border">
                        <div className="stat">{data ? data.id : null}</div>
                        <div className="stat-value">Index</div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Card;